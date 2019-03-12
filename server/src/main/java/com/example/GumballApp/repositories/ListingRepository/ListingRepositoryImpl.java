package com.example.GumballApp.repositories.ListingRepository;

import com.example.GumballApp.models.Listing;
import com.example.GumballApp.repositories.ListingRepository.ListingRepositoryCustom;
import org.hibernate.Criteria;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.EntityManager;
import javax.transaction.Transactional;
import java.util.List;

public class ListingRepositoryImpl implements ListingRepositoryCustom {
    @Autowired
    EntityManager entityManager;

    @Transactional
    public List<Listing> findListingsByTown(String town){
        List<Listing> results = null;
        Session session = entityManager.unwrap(Session.class);
        try {
            Criteria cr = session.createCriteria(Listing.class);
            cr.createAlias("customer", "customerAlias");
            cr.add(Restrictions.eq("customerAlias.town", town));
            results = cr.list();
        } catch (HibernateException ex){
            ex.printStackTrace();
        } finally {
            session.close();
        }
        return results;
    }
}
